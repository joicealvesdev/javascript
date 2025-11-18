from fpdf import FPDF

class PDF(FPDF):
    def header(self):
        self.set_font("Arial", "B", 12)
        self.cell(0, 10, "Resumo ENEM - Geopolítica, Climas no Brasil, Chuva Ácida e Temas Frequentes", ln=True, align="C")
        self.ln(5)

    def chapter_title(self, title):
        self.set_font("Arial", "B", 12)
        self.set_text_color(0)
        self.cell(0, 10, title, ln=True)
        self.ln(2)

    def chapter_body(self, body):
        self.set_font("Arial", "", 11)
        self.set_text_color(50)
        self.multi_cell(0, 8, body)
        self.ln()

    def add_question(self, question, options, answer):
        self.set_font("Arial", "B", 11)
        self.multi_cell(0, 8, "Questão: " + question)
        self.set_font("Arial", "", 11)
        for opt in options:
            self.multi_cell(0, 8, opt)
        self.set_text_color(0, 100, 0)
        self.multi_cell(0, 8, "Gabarito: " + answer)
        self.set_text_color(0)
        self.ln(4)

conteudos = {
    "Geopolítica": """Geopolítica estuda as relações de poder e influência entre os países, levando em conta aspectos como território, economia, recursos naturais e disputas estratégicas. Temas comuns incluem:
- Guerra Fria: disputa entre EUA e URSS.
- Globalização: intensificação das relações econômicas e culturais.
- Conflitos no Oriente Médio: petróleo e religião.
- Organização do espaço mundial: países desenvolvidos x subdesenvolvidos.""",

    "Climas no Brasil": """O Brasil possui 6 tipos principais de clima:
- Equatorial: quente e úmido (Amazônia).
- Tropical: duas estações bem definidas (Centro-Oeste e Sudeste).
- Semiárido: quente e seco (sertão nordestino).
- Subtropical: verões quentes e invernos frios (Sul).
- Tropical de altitude: áreas elevadas do Sudeste.
- Litorâneo úmido: presente no litoral com alta umidade.""",

    "Chuva Ácida": """Chuva ácida ocorre quando poluentes como óxidos de enxofre (SO2) e nitrogênio (NOx) reagem com a água da atmosfera formando ácidos. Esses ácidos precipitam com a chuva, causando:
- Danos à vegetação e solos.
- Corrosão de monumentos e estruturas.
- Problemas respiratórios.
Fontes: queima de combustíveis fósseis e indústrias.""",

    "Temas que mais caem no ENEM (Geografia)": """1. Meio ambiente: desmatamento, queimadas, poluição.
2. Urbanização e problemas urbanos.
3. Agropecuária e uso da terra.
4. Geopolítica e conflitos.
5. Clima e vegetação do Brasil.
6. Fontes de energia: hidrelétricas, petróleo, energia solar.
7. Industrialização e economia brasileira.
8. Globalização e blocos econômicos."""
}

questoes = [
    {
        "pergunta": "Qual é o principal fator que contribui para a formação da chuva ácida?",
        "opcoes": [
            "A) Uso de fertilizantes na agricultura.",
            "B) Desmatamento em áreas tropicais.",
            "C) Emissão de gases poluentes pelas indústrias.",
            "D) Queimadas em florestas tropicais.",
