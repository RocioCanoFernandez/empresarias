# Usar una imagen ligera de Nginx basada en Alpine para servir contenido estático
FROM nginx:alpine

# Etiquetas de información para mantenimiento
LABEL maintainer="SeviAI"
LABEL description="Landing page para la candidatura de Empresarias Sevillanas 2026-2029"

# Copiar el contenido estático de la carpeta dist al directorio público de Nginx
COPY dist/ /usr/share/nginx/html/

# Exponer el puerto 80 para permitir el tráfico HTTP
EXPOSE 80

# Comando para iniciar Nginx y mantenerlo en primer plano
CMD ["nginx", "-g", "daemon off;"]
