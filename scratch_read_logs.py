import json

with open(r'C:\Users\LENOVO\.gemini\antigravity-ide\brain\e798c35b-cc33-44e7-a4b0-0dab110fcd29\.system_generated\logs\transcript.jsonl', 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            if data.get('type') == 'USER_INPUT':
                print(f"[{data.get('step_index')}] USER: {data.get('content')}")
            elif data.get('type') == 'PLANNER_RESPONSE' or (data.get('source') == 'MODEL' and 'facilities' in str(data.get('content')).lower()):
                # limit print length to keep it concise
                content = str(data.get('content'))
                if len(content) > 150:
                    content = content[:150] + "..."
                print(f"[{data.get('step_index')}] MODEL: {content}")
        except Exception as e:
            pass
