/root/addons/Tools/ha-github-scrub.sh
cd /root/addons/GITHUB/
git add .
git commit -m "automated update on `date +'%d-%m-%Y %H:%M:%S'`"
git push -u origin main
