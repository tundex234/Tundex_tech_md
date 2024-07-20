FROM quay.io/sampandey001/secktor

RUN git clone https://github.com/tundex234/Tundex_tech_md.git /root/malvinking 

# Clear npm cache and remove node_modules directories
RUN npm cache clean --force
RUN rm -rf /root/malvinking/node_modules

# Install dependencies
WORKDIR /root/malvinking 
RUN npm install

# Add additional Steps To Run...
EXPOSE 3000
CMD ["npm","start" ]

#do not change the /root/malvinking or your bot won't run
