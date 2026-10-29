FROM kasmweb/core-ubuntu-noble:1.19.0

USER root

ENV HOME=/home/kasm-default-profile
ENV STARTUPDIR=/dockerstartup
ENV INST_SCRIPTS=$STARTUPDIR/install

WORKDIR $HOME

########## Chrome Noble ##########

RUN apt-get update && \
    apt-get install -y \
        wget \
        gnupg \
        ca-certificates && \
    wget -q -O /tmp/google-chrome.deb \
        https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
    apt-get install -y /tmp/google-chrome.deb && \
    rm -f /tmp/google-chrome.deb && \
    rm -rf /var/lib/apt/lists/*

# Configure XFCE for single-application mode
RUN cp $HOME/.config/xfce4/xfconf/single-application-xfce-perchannel-xml/* \
       $HOME/.config/xfce4/xfconf/xfce-perchannel-xml/ && \
    apt-get remove -y xfce4-panel

# Start Chrome after the Kasm desktop is ready
RUN printf '%s\n' \
    '#!/bin/bash' \
    '/usr/bin/desktop_ready' \
    'google-chrome --no-first-run --disable-dev-shm-usage &' \
    > $STARTUPDIR/custom_startup.sh && \
    chmod +x $STARTUPDIR/custom_startup.sh

########## Kasm permissions ##########

RUN chown 1000:0 $HOME && \
    $STARTUPDIR/set_user_permission.sh $HOME

ENV HOME=/home/kasm-user

WORKDIR $HOME

RUN mkdir -p $HOME && \
    chown -R 1000:0 $HOME

USER 1000
