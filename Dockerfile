FROM node:16.9.0-alpine

# 运行命令
RUN \
  mkdir -p /usr/src/app \
  && apk add --no-cache tzdata \
  && echo "${TIME_ZONE}" > /etc/timezone \
  && ln -sf /usr/share/zoneinfo/${TIME_ZONE} /etc/localtime

# 工作目录
WORKDIR /usr/src/app

# 用户
USER root:root

# 暴露端口
EXPOSE 5200
EXPOSE 5173