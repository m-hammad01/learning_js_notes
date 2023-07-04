## JavaScript Engine
    - JavaScript engines are programs that understand and execute JavaScript code. They take in your JavaScript code and translate it into instructions that your computer can understand and execute. They optimize the code for faster execution by using techniques like just-in-time compilation. In simple terms, JavaScript engines make your code run smoothly and quickly in your web browser or other JavaScript environments.


    - Whole Process followed by Engines:

        - Parsing: read and analyze the code. break it down into tokens

        - Abstract Syntax Tree(AST) Creation: engine then creates AST which reprents the structure and semantics of your code. the tree helps the engine to understand the relationships between different part of the code.

        - Compilation: tranlates the AST into lower-level code, usally in the form of bytecode or machine code.

        - Optimizations

        - Execution: compiled code is executd by the engine