=============================
Plone Security Best Practices
=============================

.. admonition:: Description

   These are Security recommendations that should be used on production environments and exposed stagging and developments environments.


.. contents:: :local:


Plone is not perfect, shit could happen.
If you follow these Security Best Practices for production environments and exposed stagging and development environments you could ensure that you have done all for your own security, and the plone security team might could help you best.



Where to find and supply Information
====================================






Mailing list: plone-announce
----------------------------

Security Announcements as well as new Plone releases will published on the plone-announce mailing list.
Ensure that you have subscribed to it.




Who to inform on potential security vulnerabilities or attacks
--------------------------------------------------------------

First of all, Plone is not perfect and


If you found any potential security vulnerability on Plone or any component on normal setup stack please inform security@plone.org.
The Plone Security Team will handle those issues.
If necessary the Plone Security Team will inform security teams of the specific component.

Please do not disclose unfixed vulnerabilities by sending informations or even exploid via public mailing lists or issue tracker.

If you have any question don't hesitate to contact security@plone.org

If your Plone Setup is suffering an attack, also feel free to contact the Plone Security Team.
It helps to investigate if any unknown vulnerability or attack vector is used and could provide you with tips how to recover from this attack.



Always be paranoid
==================

Security is also about paranoia. Prepare for worst cases, and hope for the best.





Use dedicated Unix-Users
------------------------

* plone_buildout
* plone_daemon

witch the group plone_group

plone buildout should be used for buildout and together with precompile recipes, you could avoid that the user that runes your Zope/Plone instance can modify the source code of your project.

plone_buildout therefore needs read and write access for your whole buildout directory and buildout cache, the plone_daemon only need to write into your var directory.



Backups & Recovery tests
------------------------

We all know that we should make backups of our sites. But it is also very important that we are able to restore those backups and know the procedure to bring a Site back online.



"Zope Manager" User should not be used for daily work
-----------------------------------------------------

Zope is an application server that provides the foundation for your Plone Instance.
It has done a lot about application security and provides a fine grained permission setting.
But nowadays in the context of Plone the ZMI is only used by Users who has a "Zope Manager" role, so full access to all things in Zope.

The ZMI was created in times before JavaScript Exploides where common, so it did not implement any Security against such exploids, like CSRF.
You should use such an User only if permissions of this user is realy needed, like for setting up the Plone page.

If you use a Zope Manager better switch of JavaScript.


Use dedicated Plone 'Site Administaror' Users
---------------------------------------------

First step on a new created Plone Site should be to create a dedicated users with 'Site Administrator' role.
This users should only be used for maintenance and administraitive purpose.
Your own account should not have extra priviliges.
Like on your OS, never ever always work as root.



Strip down access on your Management components
-----------------------------------------------

Access control
..............

Your Zope ZMI should not be avaliable via the production domain.
The following rules should blocks all common ZMI pages

For Apache httpd


.. code:: apacheconf

   RewriteRule ^(.*)manage(.*) - [L,NC]

    <LocationMatch "^/(manage|manage_main|(.*)/manage(.*))" >
        Deny from all
    </LocationMatch>


For nginx:

.. code:: nginx

    <LocationMatch "^/(manage|manage_main|(.*)/manage(.*))" >
        Deny from all
    </LocationMatch>


HTTP Security Headers
.....................

Always use as strict security headers than possible:


.. code:: apacheconf

    Header set X-Frame-Options "SAMEORIGIN"
    Header set Strict-Transport-Security "max-age=15768000; includeSubDomains"
    Header set X-XSS-Protection "1; mode=block"
    Header set X-Content-Type-Options "nosniff"
    # Header set Content-Security-Policy-Report-Only "default-src 'self'; img-src *; style-src 'unsafe-inline'; script-src 'unsafe-inline' 'unsafe-eval'"
    Header set Content-Security-Policy "default-src 'self' cdn.example.com www.example.com; \
    script-src 'self' 'unsafe-inline' 'unsafe-eval' cdn.example.com www.example.com; \
    style-src 'self' 'unsafe-inline' cdn.example.com www.example.com *.exmaple.com; \
    img-src 'self' 'unsafe-inline' cdn.example.com www.example.com *.exmaple.com; \
    font-src 'self' 'unsafe-inline' cdn.example.com www.example.com *.exmaple.com; \
    object-src 'self' cdn.example.com www.example.com *.exmaple.com;

Don't use tunnels to access ZMI
...............................

If you have stripped down access to your ZMI via your normal domain urls, don't bypass that via tunnels so that you could access the ZMI.
http://127.0.0.1:8080/ and http://localhost:8080/ are common attack vectors via JavaScript.
Consider using a dedicated manage domain.


Provide a dedicated manage domain
.................................

Apache Example

.. code:: apacheconf

    <VirtualHost  *:443>

        ServerAdmin webmaster@example.com
        ServerName manage@example.com

        SSLEngine on

        # Only use TSL 1.0+ no old SSLv2 or SSLv3
        SSLProtocol all -SSLv2 -SSLv3

        # Limit Chipher algorithem to strong ones, openssl ciphers 'HIGH:!MEDIUM:!aNULL:!MD5:-RSA' should show those
        SSLCipherSuite HIGH:!MEDIUM:!aNULL:!MD5:-RSA

        # Certificate
        SSLCertificateFile manage.example.com.pem
        # Private Key
        SSLCertificateKeyFile manage.example.com_key.pem

        # Certificate Chain of applicable
        SSLCertificateChainFile example.com.crt

        ProxyVia On
        ProxyRequests Off
        ProxyPreserveHost On
        # prevent your web server from being used as global HTTP proxy
        <LocationMatch "^[^/]">
            Deny from all
        </LocationMatch>

        <Proxy *>
            Order deny,allow
            Allow from all
        </Proxy>

        <Location />
            Order Deny,Allow
            Deny from All
            Allow from IP-Zone # Control your IP Zone to Access
            AuthType # Use a separate Authentication Protokoll

        </Location>

        Header set X-Frame-Options "SAMEORIGIN"
        Header set Strict-Transport-Security "max-age=15768000; includeSubDomains"
        Header set X-XSS-Protection "1; mode=block"
        Header set X-Content-Type-Options "nosniff"
        Header set Content-Security-Policy "default-src 'self' cdn.example.com www.example.com; \
        script-src 'self' 'unsafe-inline' 'unsafe-eval' manage.example.com; \
        style-src 'self' 'unsafe-inline' manage.example.com *.example.com; \
        img-src 'self' 'unsafe-inline' manage.example.com; \
        font-src 'self' 'unsafe-inline' manage.example.com; \
        object-src 'self' manage.example.com;

        # You could manage all included Controls via this one channel
        # Example for HAProxy
        ProxyPass /haproxy-status http://127.0.0.1:8000/haproxy-status
        ProxyPassReverse /haproxy-status http://127.0.0.1:8000/haproxy-status

        # Rewrite for Zope Root
        RewriteRule ^/(.*)$ http://127.0.0.1:8080VirtualHostBase/https/manage.example.com:443/VirtualHostRoot/$1 [P,L]

    </VirtualHost>

Keep your Plone up-to-date
--------------------------

Always keep your software up-to-date.
Latest versions will be patched and you have a smother upgrade path.


