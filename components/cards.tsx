import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Cards() {
  return (
    <section id="vice-informaci" className="flex flex-col items-center gap-6">
      <div className="flex flex-col text-center gap-2">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Více informací o naší komunitě
        </h1>
        <p className="max-w-prose text-muted-foreground">
          Níže naleznete několik důvodů proč se připojit do naší komunity. Pokud
          máte nějaký dotaz, neváhejte se zeptat.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>
              <span className="mr-2 text-3xl">📚 </span> Kategorie na vše co
              potřebujete
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Vývoj, design, programování, UX/UI a mnoho dalšího. Pokud chybí
              něco co byste rádi viděli, dejte nám vědět.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <span className="mr-2 text-3xl">❓ </span> Komunitní podpora
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Pokud máte nějaký problém, nebo se chcete poradit s něčím,
              neváhejte se zeptat. Rádi vám ostatní pomůžou.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <span className="mr-2 text-3xl">📦 </span> Pracujete na novém
              projektu
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Máte nějaký nový projekt na kterém pracujete nebo chcete ukázat co
              jste vytvořili? Rádi se vám dáme zpětnou vazbu.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <span className="mr-2 text-3xl">🎉 </span> Události a soutěže
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Čas od času pořádáme události a soutěže, kde můžete vyhrát
              zajímavé ceny. Sledujte nás na sociálních sítích a nebo se
              připojte do naší discord komunity.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              <span className="mr-2 text-3xl">🤝 </span> Spolupráce
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Chcete se stát partnerem naší komunity? Dejte nám vědět a rádi se
              s vámi spojíme.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <span className="mr-2 text-3xl">🔔 </span> Oznámení
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Sledujte novinky a oznámení naší komunity. Můžete se těšit na nové
              funkce a možnosti.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
