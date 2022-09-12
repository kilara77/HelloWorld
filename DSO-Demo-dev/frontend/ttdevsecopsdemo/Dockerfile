FROM node:16 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# stage 2
FROM nginx

COPY --from=node /app/dist/ttdevsecopsdemo /src

RUN apt-get update && apt-get install -y apt-transport-https && \
	apt list --upgradable && \
	apt upgrade -y && \
	apt autoremove -y && \
	rm -rf /var/lib/apt/lists/*


RUN rm -rf /usr/share/nginx/html && mv /src /usr/share/nginx/html &&\
    find /usr/share/nginx/html/ -type d -exec chmod 755 {} \; &&\
    find /usr/share/nginx/html/ -type f -exec chmod 644 {} \; &&\
    chmod -R 777 /usr/share/nginx/html
	
EXPOSE 8080



