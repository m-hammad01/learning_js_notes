# this
    - if this is in a function of an object then this refers to the object
    - if this is in a normal function then it refers to global/window
    - use new while creating object. this will create an empty object and point this to that object

        - function Video (title){
            this.title = title;
            console.log(this);
        }
        const v = new Video("video title")

        //Output
        Video {title: "video title"}
    