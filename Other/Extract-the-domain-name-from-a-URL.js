// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"
function domainName(url) {

  let name = url.split('.');
  console.log(name)
  for (let i = 0; i < name.length; i++) {
      if (name[i] === "http://www") {
          return name[i + 1]
      }
      if (name[i] === "www") {
          return name[i + 1]
      }
      if (name[i] = "https://") {
//             let value = name[i + 2].split('.')
//             return value
          return name[i+1]
      }
  }

}


//   Test.assertEquals(domainName("http://google.com"), "google");
// Test.assertEquals(domainName("http://google.co.jp"), "google");
// Test.assertEquals(domainName("www.xakep.ru"), "xakep");
// Test.assertEquals(domainName("https://youtube.com"), "youtube");