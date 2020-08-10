    const displaySubString = (event) => {
      debugger;
      // read & process user input
      const userString = event.target.form.string.value;

      const preStart = event.target.form.begin.value;
      const start = Number(preStart);

      const preEnd = event.target.form.end.value;
      const end = Number(preEnd);

      // execute core logic
      substringLogic(userString, start, end);
      
    }