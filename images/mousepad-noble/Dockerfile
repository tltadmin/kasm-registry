FROM kasmweb/core-ubuntu-noble:1.19.0

USER root

ENV HOME=/home/kasm-default-profile
ENV STARTUPDIR=/dockerstartup

WORKDIR $HOME

########## Mousepad ##########

RUN apt-get update && \
    apt-get install -y --no-install-recommends mousepad && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Single-application XFCE configuration
RUN cp $HOME/.config/xfce4/xfconf/single-application-xfce-perchannel-xml/* \
       $HOME/.config/xfce4/xfconf/xfce-perchannel-xml/ && \
    cp /usr/share/backgrounds/bg_kasm.png /usr/share/backgrounds/bg_default.png && \
    apt-get remove -y xfce4-panel

# Mousepad startup
RUN printf '%s\n' \
    '#!/bin/bash' \
    '/usr/bin/desktop_ready && mousepad &' \
    > $STARTUPDIR/custom_startup.sh && \
    chmod 755 $STARTUPDIR/custom_startup.sh

########## Permissions ##########

RUN chown 1000:0 $HOME

ENV HOME=/home/kasm-user

WORKDIR $HOME

RUN mkdir -p $HOME && \
    chown -R 1000:0 $HOME

USER 1000

CMD ["--tail-log"]
