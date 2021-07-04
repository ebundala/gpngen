#! /usr/bin/env bash
java -Ddw.graphhopper.datareader.file=map.osm.pbf -jar graphhopper-web-3.0.jar server config.yml
