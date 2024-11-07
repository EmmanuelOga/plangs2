FROM ubuntu:24.04

RUN apt-get update && apt-get install -y \
    build-essential \
    cmake \
    pkg-config \
    libicu-dev \
    zlib1g-dev \
    libcurl4-openssl-dev \
    libssl-dev \
    ruby-dev

RUN apt-get install -y ruby-full

RUN gem install github-linguist yajl-ruby

WORKDIR /usr/src/app

COPY in/main.rb .

CMD ["ruby", "main.rb"]