:title: Plone Security in Context
:author: Alexander Loechel
:event: PloneConf 2016 - Boston
:keywords: Plone, Zope, Security, PloneConf 2016
:data-transition-duration: 1200
:css-all: css/plone-security-in-context.css
:js: js/plone-security-in-context-charts-js
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
:class: slide level-1
:data-x: r-5000
:data-y: r+1000


What is Security?
=================

Security vs Safety

IT-Security (InfoSec triad)
---------------------------

* Confidentiality
* Integrity / Authenticity
* Availability

|rarr| Attack Vectors

Safety
------

* Functional correctness

|rarr| Reliability Engineering


----

:id: context
:class: slide level-1
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


:id: is-plone-secure
:class: slide level-1
:data-x: r+1000
:data-y: 1000

Is Plone Secure?
================

----

:id: is-plone-secure-answer1
:class: slide level-1
:data-x: r+0
:data-y: r+1000

It Depends
==========

* Plone Core itself is pretty secure
* Security of an installation depends on the installation and maintenance


*so basically*
--------------

YES Plone is pretty secure
==========================

----


:id: is-plone-secure-answer2
:class: slide level-1
:data-x: r+0
:data-y: r+1000

But Why is it Secure?
=====================

And what are good indicators for security?
------------------------------------------

* Do Number of Published Problems (CVEs and CVE Scores) give a good comparison?
* Number of Hacked Sites
* Zero Day Exploides

SORRY NO!
=========

Those are not objective and relevant comparison
and those do not reflect the current situation

----

:id: proof-of-security
:class: slide level-1
:data-x: r+1000
:data-y: 1000

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
    :alt: OWASP Report - Top 10 from 2013

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

:id: numbers1
:class: slide level-1
:data-x: r+0
:data-y: r+1000

Compare sources of Vulnerabilities in common CMSs


.. image:: images/CMS_Darstellung_Durchschnittswerte.jpg
    :width: 300px
    :class: right
    :alt: BSI CMS Security Study 2013



.. note::

    BSI CMS-Sicherheitsstudie 2013
    BSI CMS Studie 2016 (not published)

----

:id: numbers2
:class: slide level-1
:data-x: r+0
:data-y: r+1000

State 2013
==========


.. container:: results2013_chart

    .. raw:: html

        &nbsp;


.. container:: results2013_chart2

    .. raw:: html

        &nbsp;

.. image:: images/study_cover.png
    :width: 300px
    :class: right
    :alt: BSI CMS Security Study 2013


.. container:: info

    study from 2013 which just does a literature analyzes

.. note::

    BSI CMS-Sicherheitsstudie 2013
    BSI CMS Studie 2016 (not published)


----

:id: numbers3
:class: slide level-1
:data-x: r+0
:data-y: r+1000

State 2016
==========


.. image:: images/study_cover2016.png
    :width: 300px
    :class: left
    :alt: BSI CMS Security Study 2016

.. container:: rotated-warning

    unpublished

.. container:: results2016_chart

    .. raw:: html

        &nbsp;


.. container:: info

    A new study with detailed penetration tests



.. note::

    BSI CMS-Sicherheitsstudie 2013
    BSI CMS Studie 2016 (not published)


----

:id: comparison-question
:class: slide level-1
:data-x: r+1000
:data-y: 1000

So Plone is more secure in comparison to:
-----------------------------------------

* Wordpress
* Joomla
* Drupal
* Typo3
* ...

But Why?
========


----

:id: reasons1
:class: slide level-1
:data-x: r+0
:data-y: r+1000

Reasons Why Plone is more Secure
================================

* Different Focus

  * Plone strenghs are Intranets
  * Plone is not only a CMS it is actually a Portal Engine

* Python |rarr| Zen of Python
* System Design |br| |rarr| RestrictedPython, AccessControl, ... |br| |rarr| Security and Permisson Checks
* No SQL Database |rarr| no SQL injection possible
* Best of Breed Approach |br| |rarr| DRY-Princip or why should we build all tools ourself
* Code / Addon Skeletons / Templates (ZopeSkel, mr.bob)


----

:id: reasons2
:class: slide level-1
:data-x: r+0
:data-y: r+1000

Additional Reasons Why Plone is more Secure for most users
==========================================================

* Zope/Plone is very complex |rarr| *Security by obscurity*
* Zope/Plone has not a large market share |br| |rarr| not interesting for bot networks
* Zope/Plone is used by several high value targets |br|
  |rarr| Normally those will get attacked first |br|
  |rarr| attacks against them might not get published.
* Zope/Plone users are normally more aware of security concepts and web technologies



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

:id: back2basics
:class: slide level-1
:data-x: r+0
:data-y: r+1000

Back to the Basics
==================

Safety
------

*The system behaves like it should*

IT-Security (InfoSec triad)
---------------------------

* Confidentiality
* Integrity / Authenticity
* Availability



----

:id: safety
:class: slide level-1
:data-x: r+1000
:data-y: 1000

Safety
======


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

.. note::

    * Understanding of the Code
    * Maintainability
    * Reduction to the minimum |rarr| Donald Knuth - Preamture Optimazation is the root of all evel

----

:id: test
:class: slide level-1
:data-x: r+0
:data-y: r+1000

Code Conventions and Test Coverage
==================================

* Enforcement of Code Conventions in the Core
* Enforcement of Tests (Unit and Functional Test) for Core
*

|rarr| The Plone Community ensures functional correctness

----

:id: it-security
:class: slide level-1
:data-x: r+2000
:data-y: 1000


IT-Security (InfoSec triad)
===========================

* Confidentiality
* Integrity / Authenticity
* Availability

----

:id: Confidentiality
:class: slide background-image-slide level-1
:data-x: r-1000
:data-y: 2000


----


:id: workflows-permissions
:class: slide level-1
:data-x: r+0
:data-y: r+1000

Permissions & Workflow
======================

* Roles

* Permissions

* Guards

|rarr| but standard model is not enough for high confidential content - admins could see everything

|rarr| but also Custom Workflows could hide content from higher roles like managers

----

:id: Integrity
:class: slide background-image-slide level-1
:data-x: r+1000
:data-y: 2000



Integrity / Authenticity
========================

----

:id: RestrictedPython
:class: slide level-1
:data-x: r+0
:data-y: r+1000

RestrictedPython & AccessControl
================================

all attributes and objects has guarded methods for read and write

|rarr| permission to read and write objects and attributes

|rarr| automatically on all objects and the catalog

History
=======

All Changes are recorded, you can inspect who did what



----

:id: Availiablity
:class: slide level-1
:data-x: r+1000
:data-y: 2000

Availiablity
============


.. image:: images/24-7-avaliability.jpg
    :width: 600px
    :class: centered
    :alt: 24/7 Avaliability



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

:id: banning
:class: slide background-image-slide level-1
:data-x: r+0
:data-y: r+1000


.. container:: overlay centered

    **Active Bans**

    *Misbehaving Clients get automatically banned*

    |rarr| **Fail2Ban**

----

:id: work-security-teams
:class: slide background-image-slide level-1
:data-x: r+1000
:data-y: 1000

Work of a Security Team
=======================


----

:id: other-security-teams-better
:class: slide background-image-slide level-1
:data-x: r+0
:data-y: r+1000

What do other Security Teams do better?
=======================================

* More Secure Communication Channels (S/MIME / GPG-Keys for Communication are published)
* More Usage of Issue Tracker for Communications
* More communication with Hoster of the CMS (Joomla)
* *Phone Home Function* (Auto-Update, Info in Control-Panels)
* Better Information on Project Home Page

  * https://developer.joomla.org/security-centre.html
  * https://docs.joomla.org/Security
  * https://extensions.joomla.org/category/access-a-security/site-security

* CSV Reports
* More People |rarr| active Review and Inspection of CMS-Core Modules

----

:id: other-security-teams-worse
:class: slide level-1
:data-x: r+0
:data-y: r+1000

What Do other Security Teams do worse?
======================================


.. image:: images/SA-CORE-2014-005.png
    :width: 200px
    :class: right
    :alt:

* Security Team is attached to one large provider and supply patches to customers before official release
* Only Bugfix-Releases no Hotfixes
* No Security Information Available
* No Security Process on Add-Ons - Communication Process


----

:id: recomendations
:class: slide background-image-slide level-1
:data-x: r+1000
:data-y: 1000



----

:id: asis
:class: slide background-image-slide level-1
:data-x: r+0
:data-y: r+1000

.. container:: overlay-b centered

    *never use a system "as is"*

----

:id: min
:class: slide background-image-slide level-1
:data-x: r+0
:data-y: r+1000

.. container:: overlay-b centered

    *every system should get at least 15 minutes of care per day*


----

:id: survey
:class: slide background-image-slide level-1
:data-x: r+0
:data-y: r+1000


----

:id: overview
:data-x: 0
:data-y: 3000
:data-scale: 8


.. raw:: html

    <script type="text/javascript" defer>
        function results2016 () {
            $('.results2016-chart').highcharts({

                chart: {
                    type: 'column',
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false ,
                    shadow : false,
                    height: 500,
                    width: 470,
                    style: {
                        fontSize: '30px',
                    }
                },

                title: {
                    text: 'BSI - CMS Security Study 2016'
                },

                xAxis: {
                    categories: ['WordPress', 'Joomla!', 'Typo3', 'Plone', 'Liferay'],
                    title: {
                        text: 'Core / Plugins / Hardening'
                    }
                },

                yAxis: {
                    allowDecimals: false,
                    min: 0,
                    max: 30,
                    title: {
                        text: 'Vulnerabilities'
                    }
                },

                tooltip: {
                    formatter: function () {
                        return '<b>' + this.x + '</b><br/>' +
                            this.series.name + ': ' + this.y + '<br/>' +
                            'Total: ' + this.point.stackTotal;
                    }
                },

                plotOptions: {
                    column: {
                        stacking: 'normal'
                    }
                },

                series: [{
                    name: 'core high',
                    data: [0, 0, 1, 1, 2],
                    stack: 'core',
                    color: '#FF0000',
                    showInLegend: false
                }, {
                    name: 'core medium',
                    data: [3, 3, 7, 14, 8],
                    stack: 'core',
                    color: '#FFFF00',
                    showInLegend: false
                }, {
                    name: 'core low',
                    data: [11, 2, 6, 14, 7],
                    stack: 'core',
                    color: '#00FF00',
                    showInLegend: false
                }, {
                    name: 'very high',
                    data: [0, 0, 1, 0, 0],
                    stack: 'plugins',
                    color: '#CC0000'
                }, {
                    name: 'high',
                    data: [5, 5, 1, 0, 2],
                    stack: 'plugins',
                    color: '#FF0000'
                }, {
                    name: 'medium',
                    data: [6, 5, 6, 1, 2],
                    stack: 'plugins',
                    color: '#FFFF00'
                }, {
                    name: 'low',
                    data: [8, 4, 3, 0, 1],
                    stack: 'plugins',
                    color: '#00FF00',
                    showInLegend: true
                }, {
                    name: 'hardening medium',
                    data: [1, 0, 1, 0, 1],
                    stack: 'hardening',
                    color: '#FFFF00',
                    showInLegend: false
                }, {
                    name: 'hardening low',
                    data: [0, 0, 8, 0, 4],
                    stack: 'hardening',
                    color: '#00FF00',
                    showInLegend: false
                },
                ]
            });
        };
        $(document).ready ( function(){
            //results2013();
            results2016();

        });
    </script>