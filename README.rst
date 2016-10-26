# Presentations

This Deck uses Hovercraft as a Slide Generator

to install

.. code:: bash

    pyvenv hovercraft
    cd hovercraft
    source bin/activate
    pip install hovercraft

to build a slide deck in an hovercraft server:

.. code:: bash

    hovercraft -t templates/pyladies slide.rst

to build a slide deck as an generated HTML Directory:

.. code:: bash

    hovercraft  -t templates/pyladies slide.rst output

for presentation it is somtimes helpful to start directly into console and with online mode:


.. code:: bash

    hovercraft -a -s -t templates/pyladies -p 127.0.0.1:8000 slide.rst
