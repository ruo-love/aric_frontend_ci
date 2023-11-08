FROM nginx:alpine
ARG FRONTEND_PATH_BUILD=build
ARG FRONTEND_CI_DIR=node_modules/@jswork/frontend-ci
# RUN ls -alh $FRONTEND_CI_DIR

COPY $FRONTEND_PATH_BUILD /usr/share/nginx/html
# VOLUME $FRONTEND_PATH_BUILD /usr/share/nginx/html

COPY $FRONTEND_CI_DIR/ci/nginx/default.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
