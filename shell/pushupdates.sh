#!/bin/bash

answer=1
while [ "$answer" = 1 ]
do
 clear
 echo "This Script Will Modify Home Assistant"
 echo "Proceed with Caution!"
 echo ""
 echo "What would you like to do?"
 echo " "
 echo "1) Copy & Redact Code including commit"
 echo "2) Copy Configs automated"
 echo "3) Copy Configs AUTOMATED & push to GitHub"
 echo "4) Copy Configs with manual comment & push to GitHub"
 echo "x) Exit"
 echo " "
   
 read action

 if [ "$action" != "1" -a "$action" != "2" -a "$action" != "3" -a "$action" != "4" -a "$action" != "5" -a "$action" != "6" -a "$action" != "7" -a "$action" != "8" -a "$action" != "9" -a "$action" != "10" -a "$action" != "x" ];then
 		echo ":("
 		echo "Error!"
 		echo "Invalid Option"
    exit
 fi

 if [ "$action" == "1" ];then
     clear
/root/addons/Tools/ha-github-scrub.sh
    clear
 cd /root/addons/GITHUB/
    git add .
        echo -n "Enter the Description for the Change: " [Minor Update]
    read CHANGE_MSG
    git commit -m "${CHANGE_MSG}"
 fi
 if [ "$action" == "2" ];then
  clear
        echo "Copy Files for GitHub Publishing"
        echo " "
    /root/addons/Tools/ha-github-scrub.sh
    cd /root/addons/GITHUB/
        echo "GIT add"
    git add .
    git commit -m "automated update on `date +'%d-%m-%Y %H:%M:%S'`"
        echo " "
        echo "Files pushed to GitHub"
        echo " "
 fi
 if [ "$action" == "3" ];then
  clear
        echo "Copy Files for GitHub Publishing"
        echo " "
    /root/addons/Tools/ha-github-scrub.sh
    cd /root/addons/GITHUB/
        echo "GIT PUSH"
    git add .
    git commit -m "automated update on `date +'%d-%m-%Y %H:%M:%S'`"
    git push -u origin main
        echo " "
        echo "Files pushed to GitHub"
        echo " "
 fi

 if [ "$action" == "4" ];then
   clear
         echo "Copy Files for GitHub Publishing"
         echo " "    
    /root/addons/Tools/ha-github-scrub.sh
     cd /root/addons/GITHUB/
    git add .
        echo -n "Enter the Description for the Change: " [Minor Update]
    read CHANGE_MSG
    git commit -m "${CHANGE_MSG}"
    git push -u origin main
        echo " "
        echo "Files Copied to GitHub"
        echo " "
 fi

 if [ "$action" == "x" ];then
   clear
        echo " "
        echo ":("
        echo "Goodbye"
        echo " "
   exit
 fi

        echo " "
        echo "Do You Want to perform another Task?"
        echo " "
        echo "1) Yes"
        echo "x) No"
        echo " "
        read answer

if [ "$answer" = 1 ]
then "run script again"
fi

done

clear
        echo " "
        echo ":("
        echo "Exiting"
        echo " "