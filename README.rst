# Presentations

This Deck uses Hovercraft as a Slide Generator

To install you need python3.

Install hovercraft in a python3-virtualenv:

.. code:: bash

    pyvenv hovercraft
    source hovercraft/bin/activate
    pip install hovercraft

install sass:

.. code:: bash

    sudo gem install sass

build css from sass once:

.. code::

    sass --update scss:css

Or watch for changes in sass:

.. code::

    sass --watch scss:css

Build a slide deck in an hovercraft server:

.. code:: bash

    hovercraft -t templates/pyladies <slide>.rst

to build a slide deck as an generated HTML Directory:

.. code:: bash

    hovercraft  -t templates/pyladies <slide>.rst output

for presentation it is somtimes helpful to start directly into console and with online mode:

.. code:: bash

    hovercraft -a -s -t templates/pyladies -p 127.0.0.1:8000 <slide>.rst
