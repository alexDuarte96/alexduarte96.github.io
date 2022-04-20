// Toggle Sidebar
window.addEventListener('DOMContentLoaded', event => {
    const sidebarToggle = document.body.querySelector('#sidebarToggle');

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});


function nightMode(){
    console.log("Hello");
    /*
    nightMode = document.getElementById("nightMode").value;
    
    if (nightMode == "day"){
      //Night Mode
      document.documentElement.style
      .setProperty('--body-color', '#262626');
      document.documentElement.style
        .setProperty('--bg-color', '#404040');
        
      document.getElementById("nightModeBtn").innerHTML = "<i class='fas fa-sun'></i>";
    } else {
      //Day Mode
      document.documentElement.style
      .setProperty('--body-color', '#F2F2F2');
      document.documentElement.style
        .setProperty('--bg-color', '#FFFFFF');

      document.getElementById("nightModeBtn").innerHTML = "<i class='fas fa-moon'></i>";
    }
    */
}
