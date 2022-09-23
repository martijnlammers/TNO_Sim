import os

os.system("tsc .\src\Server.ts --outDir .\dist")
os.system("node .\dist\Server.js")