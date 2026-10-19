FROM python:3.12-slim
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends ffmpeg ca-certificates && rm -rf /var/lib/apt/lists/*
COPY local/requirements.txt /app/local/requirements.txt
RUN pip install --no-cache-dir -r /app/local/requirements.txt
COPY . /app
ENV MADCUT_PUBLIC=1
ENV TRANSCRIPTION_PROVIDER=sarvam
CMD ["sh", "-c", "python local/service.py"]
