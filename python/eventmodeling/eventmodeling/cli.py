import os
from langchain.llms import OpenAI
from langchain.chat_models import ChatOpenAI
from langchain.schema import (
    AIMessage,
    HumanMessage,
    SystemMessage
)

llm = OpenAI(openai_api_key=os.getenv('OPENAI_API_KEY'), temperature=0.9)
chat = ChatOpenAI(temperature=0)

def main() -> None:
    messages = chat.predict_messages([HumanMessage(content="Tell me more about Event-Modeling.")])
    print(messages)

if __name__ == "__main__":
    main()
