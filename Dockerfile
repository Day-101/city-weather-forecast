# Use the official Nginx image as a base
FROM nginx:stable

# Remove the default Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy our custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/

# Copy the build output from our React app
COPY build /usr/share/nginx/html
