FROM public.ecr.aws/lambda/nodejs:12

ENV JUMAN_VERSION 2.0.0-rc3
# ENV KNP_VERSION knp-4.20

RUN yum update -y
RUN yum upgrade -y
RUN yum -y groupinstall "Development Tools"
RUN yum install -y wget

# wget cmake
RUN wget https://cmake.org/files/v3.18/cmake-3.18.0.tar.gz
RUN tar -xvzf cmake-3.18.0.tar.gz
RUN rm cmake-3.18.0.tar.gz

# wget jumanpp
RUN wget https://github.com/ku-nlp/jumanpp/releases/download/v${JUMAN_VERSION}/jumanpp-${JUMAN_VERSION}.tar.xz
RUN tar xvf jumanpp-${JUMAN_VERSION}.tar.xz
RUN rm jumanpp-${JUMAN_VERSION}.tar.xz

# wget knp
# RUN wget http://nlp.ist.i.kyoto-u.ac.jp/nl-resource/knp/${KNP_VERSION}.tar.bz2
# RUN tar jxvf ${KNP_VERSION}.tar.bz2
# RUN rm ${KNP_VERSION}.tar.bz2

# install cmake
RUN yum -y install openssl-devel
RUN cd cmake-3.18.0 && \
    ./bootstrap && \
    make && \
    make install

# install juman++v2
RUN cd jumanpp-${JUMAN_VERSION} && \
    mkdir build && \
    cd build && \
    cmake .. -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr/local && \
    make && \
    make install

# install knp
# RUN cd ${KNP_VERSION} && \
#     ./configure && \
#     make && \
#     make install

# clean
RUN cd cmake-3.18.0 && \
    make uninstall
RUN rm -rf cmake-3.18.0
RUN yum -y groupremove "Development Tools"
RUN yum remove -y wget

COPY ./jumanpp-lambda.js /var/task
CMD ["/var/task/jumanpp-lambda.jumanppHandler"]
ENTRYPOINT ["/lambda-entrypoint.sh"]

EXPOSE 8080
