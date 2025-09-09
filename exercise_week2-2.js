const Print = (str) =>
{
    console.log(str);
}
const PrintError = (str) =>
{
    console.error(str);
}


// TRY-CATCH ERROR HANDLING
const ErrorHandling = () => {
    try {
        Print('Try.');
        let result = [];
        return result[1].name;
    } catch (error) {
        Print('Catch.');
        PrintError(`ERROR: ${error.message}`);
        return null;
    } finally {
        // 'finally' keyword is optional, will run regardless of result
        Print('Finally.');
    }

    Print('Wheeeeee!!!');
}
const result = ErrorHandling();
Print(result);


// AWAIT ASYNC
// Asynchronous function
async function FetchData(url) {
    try
    {
        // Fetch from URL and wait for response
        const response = await fetch(url);
        // Fetch data from response
        const data = await response.json();
        // console.log(response, data);
        return data;
    }
    catch (error)
    {
        PrintError(`ERROR: ${error.message}`);
        throw error;
    }
}

async function DisplayData(url) {
    try {
        const data = await FetchData(url);
        Print(data);
    } catch (error) {
        PrintError(`ERROR: ${error.message}`);
        throw error;
    }
}

DisplayData('https://dogapi.dog/api/v2/breeds');