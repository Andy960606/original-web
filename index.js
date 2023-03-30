// 在文档加载后运行脚本
document.addEventListener("DOMContentLoaded", function(event) {
    // 替换为您的OpenAI API密钥
    const apiKey = "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";
    
    // 创建OpenAI API客户端
    const openai = new OpenAI(apiKey);
    
    // 获取文本输入和输出元素
    const inputElement = document.getElementById("input");
    const outputElement = document.getElementById("output");
    
    // 监听文本输入元素
    inputElement.addEventListener("input", async function(event) {
        // 获取输入文本
        const inputText = event.target.value;
        
        try {
            // 同步OpenAI API
            const response = await openai.complete({
                engine: "davinci",
                prompt: inputText,
                maxTokens: 2048,
                temperature: 0.5
            });
            
            // 显示输出文本
            outputElement.value = response.data.choices[0].text;
        } catch(error) {
            // 显示错误消息
            outputElement.value = "Error: " + error.message;
        }
    });
});
