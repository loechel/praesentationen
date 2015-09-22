=============================
Plone Security Best Practices
=============================

.. admonition:: Description

   These are Security recommendations that should be used on production environments and exposed stagging and developments environments.


.. contents:: :local:


Plone is not perfect, shit could happen.
If you follow these Security Best Practices



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



Use dedicated Unix-Users
------------------------

* plone_buildout
* plone_deamon

Group plone_group



"Zope Manager" User should not be used for daily work
-----------------------------------------------------

Zope is an application server that provides the foundation for your Plone Instance.


Backups & Recovery tests
------------------------


Strip down access on your Management components
-----------------------------------------------

Access control
..............








Keep your Plone up-to-date
--------------------------




