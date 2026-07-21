#!/usr/bin/env python3
"""Rimuove dal file nginx `cliente1` i blocchi `server { ... }` che certbot ha
erroneamente aggiunto per cms.museosegni.com (blocchi senza proxy_pass che
rispondono 404 e intercettano il traffico del CMS di Museo Segni).

Conserva intatti tutti gli altri blocchi (cms.irenesantori.it). Uso:

    sudo python3 deploy/nginx/clean-cliente1.py

Fa un backup in <file>.bak prima di scrivere.
"""
import sys

PATH = "/etc/nginx/sites-available/cliente1"
DROP = "cms.museosegni.com"


def split_top_level_blocks(text: str):
    """Divide il file in segmenti: ('raw', testo) oppure ('server', blocco)."""
    segments = []
    i, n = 0, len(text)
    while i < n:
        j = text.find("server", i)
        if j == -1:
            segments.append(("raw", text[i:]))
            break
        if j > i:
            segments.append(("raw", text[i:j]))
        # Trova la graffa di apertura e bilanciala
        k = text.find("{", j)
        if k == -1:
            segments.append(("raw", text[j:]))
            break
        depth, m = 0, k
        while m < n:
            if text[m] == "{":
                depth += 1
            elif text[m] == "}":
                depth -= 1
                if depth == 0:
                    m += 1
                    break
            m += 1
        segments.append(("server", text[j:m]))
        i = m
    return segments


def main():
    with open(PATH) as f:
        text = f.read()

    with open(PATH + ".bak", "w") as f:
        f.write(text)

    kept = []
    removed = 0
    for kind, seg in split_top_level_blocks(text):
        if kind == "server" and DROP in seg:
            removed += 1
            continue
        kept.append(seg)

    result = "".join(kept).strip() + "\n"
    with open(PATH, "w") as f:
        f.write(result)

    print(f"Rimossi {removed} blocchi server con '{DROP}'. Backup: {PATH}.bak")
    if removed == 0:
        print("Nessun blocco da rimuovere: cliente1 era già pulito.", file=sys.stderr)


if __name__ == "__main__":
    main()
