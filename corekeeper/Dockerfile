FROM steamcmd/steamcmd:alpine

RUN steamcmd +force_install_dir /home/corekeeper +login anonymous +app_update 1007 validate +app_update 1963720 validate +quit

WORKDIR /home/corekeeper

RUN /bin/bash _launch.sh