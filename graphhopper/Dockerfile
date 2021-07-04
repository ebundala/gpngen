FROM openjdk:slim-buster
COPY config.yml /usr/src/config.yml
COPY start.sh /usr/src/start.sh
# COPY download.sh /usr/src/download.sh
WORKDIR /usr/src
RUN chmod +x start.sh
#RUN chmod +x download.sh
RUN wget https://graphhopper.com/public/releases/graphhopper-web-3.0.jar \ 
https://download.geofabrik.de/africa/tanzania-latest.osm.pbf 
# COPY graphhopper-web-3.0.jar /usr/src/graphhopper-web-3.0.jar
# COPY tanzania-latest.osm.pbf /user/src/tanzania-latest.osm.pbf
VOLUME [ "/usr/src/graph-cache" ]
# VOLUME [ "/usr/src/config.yml" ]
EXPOSE 8989
EXPOSE 8990
CMD ["./start.sh"]