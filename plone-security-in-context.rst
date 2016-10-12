:title: Plone Security in Context
:author: Alexander Loechel
:event: PloneConf 2016 - Boston
:keywords: Plone, Zope, Security, PloneConf 2016
:data-transition-duration: 1200
:css-all: css/plone-security-in-context.css
:auto-console: Yes


.. role:: slide-title-line1
    :class: line1

.. role:: slide-title-line2
    :class: line2

.. role:: slide-title-line3
    :class: line3

.. |br| raw:: html

    <br/>

.. |hr| raw:: html

    <hr/>

.. |rarr| raw:: html

    &rarr;

.. role:: python(code)
   :class: highlight code python
   :language: python

.. role:: tcl(code)
   :class: highlight code tcl
   :language: tcl

----

:id: title
:class: slide title-slide level-1
:data-x: 0
:data-y: 0

.. class:: title


.. container:: centered

    .. image:: images/plone-logo.png
        :height: 200px
        :class: centered

Security in Context
===================

.. container:: centered

    Alexander Loechel

----

:id: security-basics
:class: slide background-image-slide level-1
:data-x: r-3500
:data-y: r+1000


What is Security?
=================

Security vs Safty

IT-Security (InfoSec triad)
---------------------------

* Confidentiality
* Integrity / Authenticity
* Availiablity

|rarr| Attack Vectors

Safety
------

* Functional correctness

|rarr| Reliability Engineering


----

:id: context
:class: slide background-image-slide level-1
:data-x: r+0
:data-y: r+1000

Security in Context
===================

Definition of Context

* CMS-Market
* Web-Technologies



----

:id: market
:class: slide background-image-slide level-1
:data-x: r+0
:data-y: r+1000



----

:id: market-perspective
:class: slide background-image-slide level-1
:data-x: r+0
:data-y: r+1000


----

:id: garden
:class: slide background-image-slide level-1
:data-x: r+0
:data-y: r+1000


.. image:: images/cms-gartenfibel.png
    :height: 500px
    :class: right
    :alt: CMS-Garden Fiebel

.. container:: overlay-b

    * *learn from others,*
    * *exchange knowledge with other communities*
    * *cooperation on Security Teams and contact with Security Institutions*

    Lot of Security Research on larger Systems:

    * Wordpress
    * Joomla
    * Drupal
    * Plone

----


:id: is-plone-Secure
:class: slide background-image-slide level-1
:data-x: r+0
:data-y: r+1000

Is Plone Secure?
================

----


:id: is-plone-Secure-answer1
:class: slide background-image-slide level-1
:data-x: r+0
:data-y: r+1000

YES
===

----


:id: is-plone-Secure-answer2
:class: slide background-image-slide level-1
:data-x: r+0
:data-y: r+1000

But Why is it Secure?
=====================

And what are good indicators for security?
------------------------------------------

* Do Number of Published Problems (CVEs and CVE Scores) give a good comparisson?
* Number of Hacked Sites
* Zero Day Exploides

SORRY NO!
=========

Those are not objective and relevant comparisson
and those do not reflect the current situation

----

:id: is-plone-Secure-answer3
:class: slide level-1
:data-x: r+0
:data-y: r+1000

How to proof Security
=====================

* Security is a process not a state
* Real Security could not be tested automatically |br| |rarr| known vulnerability could

Approach
--------

.. image:: images/OWASP-Logo.jpg
    :width: 300px
    :class: right
    :alt: Open Web Application Security Project

* Manually test for common Attack Vectors (|rarr| *OWASP Study - Top 10 List of Most Critical Web Application Security Risks*)
* Analyze Processes of the Developer
* Analyze Processes of the Security Team
* Analyze Release Process (Bugfix, Hotfix-Releases)
* Information Policy
* Dependency of Developers

.. note::

    OWASP |rarr| Open Web Application Security Project


----

:id: owasp-top10
:class: slide level-1
:data-x: r+0
:data-y: r+1000

OWASP Top 10 Report
===================

*(Last 2013 - new Version for 2016 in Progress)*


.. image:: images/OWASP-report.png
    :width: 280px
    :class: right
    :alt:

#. Injection
#. Broken Authentication and Session Management
#. Cross-Site Scripting (XSS)
#. Insecure Direct Object References
#. Security Misconfiguration
#. Sensitive Data Exposure
#. Missing Function Level Access Control
#. Cross-Site Request Forgery (CSRF)
#. Using Known Vulnerable Components
#. Unvalidated Redirects and Forwards


----

:id: zen
:class: slide background-image-slide level-1
:data-x: r+0
:data-y: r+1000

.. container:: overlay centered


    **The Zen of Python**

    .. code::

        >>> import this
        The Zen of Python, by Tim Peters

        Beautiful is better than ugly.
        Explicit is better than implicit.
        Simple is better than complex.
        Complex is better than complicated.
        Flat is better than nested.
        Sparse is better than dense.
        Readability counts.
        Special cases aren't special enough to break the rules.
        ...






----

:id: techs
:class: slide subtitle-slide level-1
:data-x: r+1000
:data-y: 1000

Special Knowledge
=================


----

:id: ids
:class: slide background-image-slide level-1
:data-x: r+0
:data-y: r+1000

.. container:: overlay centered

    **Users - Authentication - Authorization**

    * Shared IDs
    * Shared Secrets
    * Horizontal and Vertical Single Sign On


.. container:: img-quote

    CC2-BY https://www.flickr.com/photos/16048742@N08/3458184491

----

:id: scaling
:class: slide background-image-slide level-1
:data-x: r+0
:data-y: r+1000


.. container:: overlay-b centered

    **Infinite Scaling**

    .. image:: images/cluster.png
        :height: 500px
        :class: centered
        :alt: Cluster

.. container:: img-quote

    CC4-BY docs.plone.org

----

:id: no-downtime
:class: slide background-image-slide level-1
:data-x: r+0
:data-y: r+1000


.. container:: overlay-b centered

    **Always Up - High Avaliablity**

    * Upgraded with no downtime
    * Infrastructure changes
    * Automatic Failover
    * Different Handlers for specific "users" (eg. robots)


.. container:: img-quote

    CC-BY-SA https://www.flickr.com/photos/61604830@N00/3888972875


----

:id: caching
:class: slide background-image-slide level-1
:data-x: r+0
:data-y: r+1000

.. container:: overlay centered

    **Caching Tricks**

    * Short Time Caching
    * Grace / Stale Fallback
    * Split View Caching

        Web users’ tolerable waiting time and the tolerable waiting time for information retrieval is approximately 2 seconds

        -- Fiona Fui-Hoon Nah - College of Business Administration - University of Nebraska-Lincoln



.. container:: img-quote

    Bundesarchiv, B 145 Bild-F079012-0030 / CC-BY-SA 3.0



----

:id: fixing
:class: slide background-image-slide level-1
:data-x: r+0
:data-y: r+1000

.. container:: overlay

    *Fixing Problems the easiest Way*

    .. code:: apache

        RewriteRule ^(.*)manage(_.*)$ - [L,NC]

        <LocationMatch "^/(manage|manage_main|(.*)/manage(_.*))$" >
         Order deny,allow
         Deny from all
        </LocationMatch>

.. container:: img-quote

    CC2-BY https://www.flickr.com/photos/axel-d/488690177




----

:id: complex-setups
:class: slide background-image-slide level-1
:data-x: r+0
:data-y: r+1000

.. container:: overlay-b centered

    *complex is better than complicated*

    * specialized Systems
    * small and readable configurations
    * best of breed tools

----

:id: search
:class: slide level-1
:data-x: r+0
:data-y: r+1000

Searching Across Domains |br| and Different Systems
===================================================

.. image:: images/sp-livesuche.png
    :width: 300px
    :class: right
    :alt:

Backends
--------

* Solr |br| (collective.solr)
* Elastic Search |br| (collective.elasticindex)
* Google Search Appliance |br| (collective.gsa)

Specials
--------

* ACLs
* Live and Advanced Search



----

:id: complex-systems
:class: slide background-image-slide level-1
:data-x: r+1000
:data-y: 1000

.

    A complex system that works is invariably found to have envolved from a simple system that worked.
    A complex system designed from scratch never works and cannot be patched up to make it work.
    You have to start over with a working simple system.

    -- Jon Gall


.. container:: img-quote

    CC3-BY-SA https://en.wikipedia.org/wiki/File:Tokyo_by_night_2011.jpg



----

:id: overview
:data-x: 0
:data-y: 3250
:data-scale: 10
