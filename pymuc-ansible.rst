:title: Ansible
:author: Alexander Loechel
:event: Python & Plone User Group Munich - 03.11.2015
:keywords: Python, Ansible, Provisioning
:data-transition-duration: 1500
:css-all: css/pymuc-ansible.css
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

.. role:: python(code)
   :class: highlight code python
   :language: python

.. role:: tcl(code)
   :class: highlight code tcl
   :language: tcl



----

:id: pyMucTitle
:class: slide title-slide level-1
:data-x: 0
:data-y: 0

.. class:: centered top

    Python & Plone User Group Munich


DevOps - Provisioning Tools
===========================

* Ansible (*Alexander*)
* Salt (*Oz*)

.. class:: centered bottom

    03.11.2015 |br|
    Alexander Loechel

----

:id: devops
:class: slide title-slide level-1
:data-x: r-1500
:data-y: 1000

DevOps
======


.. class:: centered

    Developer and Operator Roll combined

----

:id: devops-tools
:class: slide title-slide level-1
:data-x: r+0
:data-y: r+1000

DevOps Tools
============

* Version Control Systems
* Continuous Integration
* Continuous Delivery
* System Management

  * Configuration Management
  * Orchestration
  * Provisioning Tools


----

:id: pre-title
:class: slide title-slide level-1
:data-x: r+0
:data-y: r+1000

Provisioning Tools
==================

* **Ansible** (*Alexander*)
* **Salt** (*Oz*)
* Chef
* Puppet
* CFEngine


----

:id: basics
:class: slide title-slide title-text-slide level-1
:data-x: r+1000
:data-y: 1000

Basics
======


----

:id: lazy
:class: slide title-slide title-text-slide level-1
:data-x: r+0
:data-y: r+1000

Be lazy
=======

* As a Developer
* As an Operator / System Administrator

(http://www.thegeekstuff.com/2011/07/lazy-sysadmin/)


----

:id: docs
:class: slide title-slide title-text-slide level-1
:data-x: r+0
:data-y: r+1000

Document everything
===================


----

:id: repeatable
:class: slide title-slide title-text-slide level-1
:data-x: r+0
:data-y: r+1000

Be repleatable
==============

----

:id: righttool
:class: slide title-slide title-text-slide level-1
:data-x: r+0
:data-y: r+1000

Choose the right tool for the job
=================================

----

:id: title
:class: slide title-slide level-1
:data-x: r+1000
:data-y: 1000

.. class:: title

    .. image:: images/Ansible_Logo.png
        :height: 400px
        :class: centered ansible-logo

    .. image:: images/RedHat.png
        :height: 50px
        :class: right

----

:id: difference
:class: slide level-1
:data-x: r+0
:data-y: r+1000

Main Difference of Ansible to Puppet, Chef and Salt
===================================================

* Agentless
* Everything works over SSH / Remote-Invocation

* Ansible needs a unixoid Master

  * Native SSH-Client
  * Python 2.7

* Ansible Clients could be

  * Linux
  * UNIX and Unixoid Systems (Mac OSX)
  * Windows


----

:id: toolset
:class: slide level-1
:data-x: r+0
:data-y: r+1000

Ansible Toolset
===============

* ansible
* ansible-playbook

* ansible-doc
* ansible-vault
* ansible-pull
* ansible-galaxy


----

:id: playbooks
:class: slide level-1
:data-x: r+0
:data-y: r+1000

Ansible Playbooks
=================

* yaml files

* inventories

* tasks
* handlers
* variables
* templates
* files

* roles

----

:id: example
:class: slide level-1
:data-x: r+1000
:data-y: 1000

Example Playbooks
=================

.. code:: yaml

    ---

    - hosts: webserver
      sudo: true
      gather_facts: true

      handlers:

        - name: "restart apache2"
          service: apache2 state=restarted

      tasks:

        - name: "Install the Apache httpd packages"
          apt: name={{ item }} state=present update_cache=no
          with_items:
            - ssl-cert
            - apache2
            - libapache2-mod-log-slow
            - apache2-utils
            - apachetop
          when: ansible_os_family == "Debian"



----

:id: haproxy
:class: slide level-1
:data-x: r+0
:data-y: r+1000

HAProxy Example
===============

- Notify of Handlers
- With Items

.. code:: yaml

     - tasks:

        - name: "Copy HAProxy configs"
          copy:
            src=files/{{ item }}
            dest=/etc/haproxy/haproxy.conf.d/{{ item }}
            mode="u=rw,g=r,o=r"
            owner=root
            group=root
          with_items:
            - 09-haproxy-fiona-webproxy.cfg
            - 10-haproxy-plone-webproxy.cfg
          notify:
            - "Assemble HAProxy Config"


----

:id: specials
:class: slide level-1
:data-x: r+0
:data-y: r+1000

Specials
========

.. code:: yaml

    - name: "Check if anything needs autoremoving"
      shell: apt-get autoremove -y --dry-run
      sudo: True
      register: check_autoremove
      changed_when: "' 0 zu entfernen' not in check_autoremove.stdout"
      failed_when: "check_autoremove.rc != 0"
      always_run: True


----

:id: roles
:class: slide level-1
:data-x: r+0
:data-y: r+1000

Ansible Roles
=============

* Ansible Galaxy
* DebObs



----

:id: overview
:data-x: 0
:data-y: 3250
:data-scale: 10
