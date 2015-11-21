"use strict"
var fs = require('fs');

var weapons = [
  'Glock-18','Tec-9','CZ75-Auto','P2000',
  'USP-S','Desert Eagle','Dual Berettas',
  'Five-SeveN','Nova','XM1014','Sawed-Off',
  'MAG-7','MAC-10','MP7','UMP-45','PP-Bizon',
  'P90','MP9','Galil AR','AK-47','SG 553',
  'G3SG1','FAMAS','M4A4','M4A1-S',
  'SSG 08','AUG','AWP','SCAR-20','M249','Negev',
  'Gut Knife', 'Flip Knife', 'Bayonet', 'M9 Bayonet',
  'Karambit', 'Huntsman Knife', 'Falchion Knife',
  'Shadow Daggers', 'Butterfly Knife'
];

(function() {
    weapons.forEach(
      (element, index, array) =>
      {
        weapons[index] =
        {
          name: element,
          cached: false,
          skins: [],
          skinData : {}
        }
      }
    );

    let items;
    fs.readFile('stash-resource.json', 'utf8', function (err, data) {
      if (err) throw err;
      items = JSON.parse(data);
      weapons.forEach(
        (element, index, array) =>
        {
          let name = element.name;
          items.forEach(
            (fileElement, fileIndex, fileArray) =>
            {
              if (fileElement.name.includes(name)) {
                weapons[index].skins.push(
                  {
                    skinName: fileElement.name.split(name + " ")[1],
                    imgNumber: fileElement.url.split(
                      "http:\/\/csgostash.com\/skin\/")[1]
                      .match(/\d+/)[0]
                  }
                );
              }
            }
          )
        }
      );
      fs.writeFile('result.json', JSON.stringify(weapons), function (err) {
        if (err) throw err;
        console.log('It\'s saved to result.json!');
      });
    });
})();
