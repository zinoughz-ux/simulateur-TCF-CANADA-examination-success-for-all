from openai import OpenAI
client = OpenAI()

def correct_text(text, task):
    prompt = f"""
Tu es examinateur officiel du TCF Canada.
Analyse ce texte (Tâche {task}) selon :
- Respect de la consigne
- Organisation
- Lexique
- Grammaire
- Clarté
Donne un score /20 et le niveau.
Texte :
{text}
"""

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    )
    return response.choices[0].message.content
