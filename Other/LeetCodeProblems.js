// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

function ip(address) {
    let ip = address.split(".")
    let result = [];
    for (let i = 0; i < ip.length; i++) {
        if (i !== ip.length - 1) {
            result.push(ip[i] + "[.]")
        } else {
            result.push(ip[i])
        }
    }
    return result.join("");

}


// ---------------------------------------------------