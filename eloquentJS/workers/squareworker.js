/* 
 * Works the square
 */
addEventListener("message", event => {
    postMessage(event.data * event.data);
});