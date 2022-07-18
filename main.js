javascript:
    navigator.geolocation.getCurrentPosition(
        function(a){
            r = `${a.coords.latitude}, ${a.coords.longitude}`
            navigator.clipboard.writeText(r)
            if(new URL(location.href).searchParams.get("redirect")){location.href=new URL(location.href).searchParams.get("redirect")}
        },
        function(a){}
    )
