ssh root@YOUR_VPS_IP

apt update && apt upgrade -y
apt install curl wget nginx -y
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install nodejs -y
npm install -g pm2
apt update && apt install git -y

cd /var/www
git clone https://github.com/yourusername/your-nextjs-app.git your-app
cd your-app



nano .env.production
npm install
npm run build  
NODE_ENV=production PORT=3001 pm2 start npm --name "kenyan-blog" -- start
pm2 save
pm2 startup


nano /etc/nginx/sites-available/kenyan-blog.com

server {
  listen 80;
  server_name kenyanpeople.com www.kenyanpeople.com;

  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}

ln -s /etc/nginx/sites-available/jobske /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx

apt install certbot python3-certbot-nginx -y
certbot --nginx -d your-domain.com
