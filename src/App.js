import logo from './logo.svg';
import './App.css';
import { Components } from './components/components';
import {useEffect} from "react";

/**
 * TODO:
 *
 * - take the strings
 * - Found and count the sub strings:
 * |\_/| - for wolf and (oo) for owl.
 *
 * - Iterate on the string.
 *
 *
 * need to find all the substrings.
 * need to know if it's wolf or owl.
 * need to count .
 *
 *
 *
 *
 *
 *
 *
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
    useEffect(()=>{
        let wolfCounter = 0;
        let owlCounter = 0;

        console.log("Some pure js");

        /**
         * Auto-generated code below aims at helping you parse
         * the standard input according to the problem statement.
         **/

//test1

        // let inputs = [7, 2];
        // var inputs = readline().split(' ');

        // let str = '"';
        // console.log("str = ", str);
        // const rows = ['/|\\_/|\\', '/|(oo)\\'];


//test2

            //
            // let inputs = [11, 3];
            // // var inputs = readline().split(' ');
            //
            // // let str = '"';
            // // console.log("str = ", str);
            // const rows = [
            //     "/|\\ /|\\ /|\\",
            //     "/|\\ /|\\ /|\\" ,
            //     "/|\\ /|\\ /|\\"
            // ];




//test3
//         let inputs = [30, 10];
//
//         const rows = [
//             "/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\",
//             "/|\\/|o/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\",
//             "/|\\/|\\/|\\/|\\_/|/|\\/|oo|\\/|\\/|\\",
//             "/|\\/|\\/_\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\",
//             "/|\\/|\\/_\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\",
//             "/|\\(oo)|\\/|\\/|\\|\\_/|\\/|\\o|\\/|\\",
//             "/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\",
//             "/|\\/|\\/|\\/|\\/|\\/(oo)\\/|\\/|\\/|\\",
//             "/|\\|\\_/|\\/|\\/|\\/|\\/|\\/|_/|\\/|\\",
//             "/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\"
//
//
//
//
//
//         ]
//




//test4
        let inputs = [60, 16];

        const rows = [
            "/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\" ,
            "/|\\/|o/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\" ,
            "/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\" ,
            "/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\" ,
            "/|\\/|\\/_\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\" ,
            "/|\\(oo)|\\/|\\/|\\|\\_/|\\/|\\o|\\/|\\/|\\/|\\|\\_/|\\/|\\/|\\/|\\/|\\/|\\/|\\" ,
            "/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\" ,
            "/|\\/|\\/|\\/|\\/|\\/(oo)\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\" ,
            "/|\\|\\_/|\\/|\\/|\\/|\\/|\\/|_/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\" ,
            "/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\" ,
            "/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\" ,
            "/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\" ,
            "/|\\/|\\/|\\/|\\|\\_/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\" ,
            "/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\(oo)|\\/|\\/|\\/|\\/|\\/|\\" ,
            "/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\" ,
            "/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\/|\\"





        ]


        const W = parseInt(inputs[0]);
        const H = parseInt(inputs[1]);
        for (let i = 0; i < H; i++) {
            // const ROW = readline();
            console.log(rows[i]);
            checkString(rows[i]);


        }
        console.log(wolfCounter);
        console.log(owlCounter);
        // checkString("abcdefgh")

        function checkString(string){
            let wolfString = "|\\_/|";
            let owlString = "(oo)";
            for (let i = 0; i < string.length; i++){
                // console.log(string.charAt(i));
                if (string.length - i >= 5){
                    let substring1 = string.substring(i, i+5);//i+4
                    if (substring1 === wolfString){
                        wolfCounter++;
                    }
                    // console.log("string = ", string, " substring = ", substring1);

                }
                if (string.length - i >= 4){
                    let substring2 = string.substring(i, i+4);//i+4
                    // console.log("string2 = ", string, " substring2 = ", substring2);
                    if (substring2 === owlString){
                        owlCounter++;
                    }

                }
                else{
                    break;
                }



            }
        }


        // if ( length - currentIndex >=5)
        //     substring from here to 5 forward. checking wolf.
        // if ( length - currentIndex >=4)
        //
        // substring from here to 4 forward. checking owl.


    },[]);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit2 <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"        >
          Learn React
        </a>
      </header> */}

      <Components/>

    </div>
  );
}

export default App;
