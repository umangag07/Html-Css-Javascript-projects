function getAndUpdate() {
            let subtitle;
            let title;
            let desc;
            subtitle = document.getElementById('subtitle').value;
            title = document.getElementById('title').value;
            desc = document.getElementById('desc').value;
            if (localStorage.getItem('jsonstore') == null) {
                jsonarrayitem = [];
                jsonarrayitem.push([title, subtitle, desc]);
                localStorage.setItem('jsonstore', JSON.stringify(jsonarrayitem));
            } else {
                jsonstorestr = localStorage.getItem('jsonstore');
                jsonarrayitem = JSON.parse(jsonstorestr);
                jsonarrayitem.push([title, subtitle, desc]);
                localStorage.setItem('jsonstore', JSON.stringify(jsonarrayitem));
            }
            update();

        }

        function update() {
            if (localStorage.getItem('jsonstore') == null) {
                jsonarrayitem = [];
                localStorage.setItem('jsonstore', JSON.stringify(jsonarrayitem));
            } else {
                jsonstorestr = localStorage.getItem('jsonstore');
                jsonarrayitem = JSON.parse(jsonstorestr);
            }

            // populate data
            let tablebody = document.getElementById('table');
            str = '';
            jsonarrayitem.forEach((element, index) => {
                str += `
                <tr>
                    <th scope="row">${index+1}</th>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td>${element[2]}</td>
                    <td><button type="submit" class="btn btn-primary mb-2" onclick="deleted(${index})">Delete</button></td>
                </tr>`;
            })
            tablebody.innerHTML = str;
        }
        let clicked = document.getElementById('click');
        clicked.addEventListener("click", getAndUpdate);
        update();

        function deleted(itemindex) {
            jsonstorestr = localStorage.getItem('jsonstore');
            jsonarrayitem = JSON.parse(jsonstorestr);
            // delete the item idex element from the array
            jsonarrayitem.splice(itemindex, 1)
            localStorage.setItem('jsonstore', JSON.stringify(jsonarrayitem));
            update();
        }

        function clearedall() {
            localStorage.clear();
            update();
        }





        /*let del=document.getElementById("delete");
        del.addEventListener("click",()=>{
            localStorage.removeItem()
        })*/
        //console.log(localStorage);
        //console.log(title);
        //console.log(subtitle);
