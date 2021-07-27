// // PC, MOBILE 구별
// function deviceCheck() {
//     // 디바이스 종류 설정
//     var pcDevice = "win16|win32|win64|mac|macintel";
 
//     // 접속한 디바이스 환경
//     if ( navigator.platform ) {
//         if ( pcDevice.indexOf(navigator.platform.toLowerCase()) < 0 ) {
//             console.log('MOBILE');
//             var userAgent=navigator.userAgent.toLowerCase();
//             var browser;
                    
//             if(userAgent.indexOf('edge')>-1){
            
//                 browser='익스플로러 엣지';
                
//             } else if (userAgent.indexOf('whale')>-1){
            
//                 browser='네이버 웨일';
                
//             } else if (userAgent.indexOf('chrome')>-1){
            
//                 browser='크롬';
                
//             } else if (userAgent.indexOf('firefox')>-1){
            
//                 browser='파이어폭스';
                
//             } else {
            
//                 browser='익스플로러';
                
//             }
//             alert(browser);
//         } else {
//             console.log('PC');
//             var userAgent=navigator.userAgent.toLowerCase();
//             var browser;
                    
//             if(userAgent.indexOf('edge')>-1){
            
//                 browser='익스플로러 엣지';
                
//             } else if (userAgent.indexOf('whale')>-1){
            
//                 browser='네이버 웨일';
                
//             } else if (userAgent.indexOf('chrome')>-1){
            
//                 browser='크롬';
                
//             } else if (userAgent.indexOf('firefox')>-1){
            
//                 browser='파이어폭스';
                
//             } else {
            
//                 browser='익스플로러';
                
//             }
//             alert(browser);
//         }
//     }
// }
// deviceCheck();