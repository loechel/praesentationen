:title: Pyramid
:author: Alexander Loechel
:event: Python User Group München - Python Web
:keywords: Pyramid, Python, Python Web,
:data-transition-duration: 1500
:css-all: css/lightning-talks.css
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

:id: title
:class: slide title-slide level-1
:data-x: 0
:data-y: 0

.. class:: title


.. container:: centered

    .. image:: images/pyramid-logo.png
        :width: 600px
        :class: centered

----


:id: on-file-pyramid-app
:class: slide level-1
:data-x: 0
:data-y: r+1000

One File Pyramid App |br| Hello World
=====================================

.. code:: python
    :number-lines:

    from wsgiref.simple_server import make_server
    from pyramid.config import Configurator
    from pyramid.response import Response

    def hello(request):
        return Response('Hello world!')

    if __name__ == '__main__':
        config = Configurator()
        config.add_route('hello_world', '/')
        config.add_view(hello, route_name='hello_world')
        app = config.make_wsgi_app()
        server = make_server('0.0.0.0', 8080, app)
        server.serve_forever()

.. container:: right

    http://trypyramid.com/

----


:id: slogan
:class: slide level-1
:data-x: 0
:data-y: r+1000

.. container:: centered

    The Start Small, Finish Big

    Stay Finished Framework


.. container:: right

    *The Pythonic Web Framework*

----


:id: normal-pyramid-app
:class: slide level-1
:data-x: 0
:data-y: r+1000

Features
========

* Scaffolds as staring Points

* Your Choice of Template Engine

  * Chamelion
  * Jinja2
  * Mako

* Schema Driven Persistence and Forms |br| (Collander und Deform)

* Data-Backend of your choice |br| (SQL, NoSQL, Files, ...)

----

:id: links
:class: slide level-1
:data-x: 0
:data-y: r+1000

Links
=====

* http://trypyramid.com/
* http://www.pylonsproject.org/
* http://docs.pylonsproject.org/en/latest/docs/pyramid.html

----

:id: overview
:data-x: 0
:data-y: 3250
:data-scale: 10
