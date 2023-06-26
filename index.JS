var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        
        function opentab(tabname){
            for(tab-link of tsblinks){
                tab-links.classlist.remove("active-link");   

            }
            for(tablink of tsbcontents){
                tablinks.classlist.remove("active-tab");   
            }
            event.currentTarget.classlist.add("active-link");
            document.getElementById(tabname).classList.add("active-link");
        }