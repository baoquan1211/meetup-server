#! ./venv/bin/python3.12
from fastapi import FastAPI
from payment import VNPayRouter
from auth.middleware import ExceptionHandlerMiddleware
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.include_router(VNPayRouter, prefix="/vnpay")

app.middleware(ExceptionHandlerMiddleware)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        app="main:app",
        port=8567,
        reload=True,
    )
