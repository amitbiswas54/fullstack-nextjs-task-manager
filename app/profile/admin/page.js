async function getData() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
}


const admin = async () =>{

   await getData();
  // throw new Error("This is an error created for testing error page");

    return (
        <div>
            <h1 className="text-sky-400 text-5xl">Admin qd      q</h1>
        </div>
    )   

}

export default admin;