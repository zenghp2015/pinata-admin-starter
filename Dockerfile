FROM node:16-alpine

# 运行命令
RUN \
  mkdir -p /usr/src/app \
  && apk add --no-cache tzdata \
  && echo "${TIME_ZONE}" > /etc/timezone \
  && ln -sf /usr/share/zoneinfo/${TIME_ZONE} /etc/localtime

# 工作目录
WORKDIR /usr/src/app

# 暴露端口
EXPOSE 7001