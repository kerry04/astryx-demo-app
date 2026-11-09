import {useState} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Switch} from '@astryxdesign/core/Switch';
import {Dialog} from '@astryxdesign/core/Dialog';
import {Card} from '@astryxdesign/core/Card';
import {Badge} from '@astryxdesign/core/Badge';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {Divider} from '@astryxdesign/core/Divider';
import {ProgressBar} from '@astryxdesign/core/ProgressBar';

/**
 * Astryx demo, SokoResult theme. Every control on this page is an Astryx
 * component — no hand-rolled buttons or inputs. All data is demo data:
 * no real markets, no real money.
 */
export default function App({
  mode,
  onToggleMode,
}: {
  mode: 'light' | 'dark';
  onToggleMode: () => void;
}) {
  const [query, setQuery] = useState('');
  const [email, setEmail] = useState('');
  const [notify, setNotify] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [position, setPosition] = useState<string | null>(null);

  const emailStatus =
    email.length === 0
      ? undefined
      : email.includes('@')
        ? {type: 'success' as const, message: 'Alerts will go to this address.'}
        : {type: 'error' as const, message: 'Enter a valid email address.'};

  return (
    <VStack padding={6} gap={4} hAlign="center">
      <VStack maxWidth={768} width="100%" gap={4}>
        <HStack justify="between" vAlign="center" wrap="wrap" gap={2}>
          <VStack gap={1}>
            <Heading level={1}>SokoResult</Heading>
            <Text type="supporting">
              Astryx demo · Soko theme · Put your money where your mouth is
            </Text>
          </VStack>
          <HStack gap={3} vAlign="center">
            <Badge variant="purple" label="Play KSh 10,000" />
            <Switch
              label="Dark mode"
              value={mode === 'dark'}
              onChange={() => onToggleMode()}
            />
          </HStack>
        </HStack>

        <Divider />

        <Card padding={4}>
          <VStack gap={3}>
            <HStack justify="between" vAlign="center" wrap="wrap" gap={2}>
              <Badge variant="neutral" label="Politics" />
              <Text type="supporting">295 days left · 1 trader</Text>
            </HStack>
            <Heading level={2}>
              Will voter turnout in the 2027 general election exceed 65%?
            </Heading>
            <Text type="supporting">
              Demo market. Prices are fixed demo numbers, not a live market.
            </Text>
            <HStack gap={2}>
              <Badge variant="success" label="YES 68%" />
              <Badge variant="error" label="NO 32%" />
            </HStack>
            <ProgressBar
              label="YES probability"
              value={68}
              variant="success"
              hasValueLabel
            />
            <HStack gap={2} wrap="wrap">
              <Button
                label="Buy YES"
                variant="primary"
                onClick={() => setPosition('10 YES @ 68')}
              />
              <Button
                label="Buy NO"
                variant="secondary"
                onClick={() => setPosition('10 NO @ 32')}
              />
              <Button
                label="How markets resolve"
                variant="ghost"
                onClick={() => setDialogOpen(true)}
              />
            </HStack>
            <Text type="supporting">
              {position
                ? `Your demo position: ${position}. Demo only — no real money.`
                : 'No position yet. Demo only — no real money.'}
            </Text>
          </VStack>
        </Card>

        <Card padding={4}>
          <VStack gap={3}>
            <Heading level={2}>Find a market</Heading>
            <TextInput
              label="Search markets"
              type="search"
              value={query}
              onChange={setQuery}
              placeholder="Try 'turnout'…"
              hasClear
              description="Search is demo-only; it filters nothing yet."
            />
            <Text type="supporting">
              {query
                ? `3 demo markets match “${query}”.`
                : 'Type to search the demo list.'}
            </Text>
          </VStack>
        </Card>

        <Card padding={4}>
          <VStack gap={3}>
            <Heading level={2}>Alerts</Heading>
            <Switch
              label="Notify me when this market moves"
              value={notify}
              onChange={setNotify}
              description="Demo switch — it sends nothing."
            />
            <TextInput
              label="Email for alerts"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="you@example.com"
              status={emailStatus}
            />
          </VStack>
        </Card>

        <Card padding={4}>
          <VStack gap={3}>
            <Heading level={2}>Buttons &amp; badges</Heading>
            <HStack gap={2} wrap="wrap">
              <Button label="Start free" variant="primary" />
              <Button label="Browse markets" variant="secondary" />
              <Button label="Learn more" variant="ghost" />
              <Button label="Reset demo" variant="destructive" />
            </HStack>
            <HStack gap={2} wrap="wrap">
              <Badge variant="neutral" label="Politics" />
              <Badge variant="purple" label="Violet" />
              <Badge variant="success" label="YES" />
              <Badge variant="error" label="NO" />
              <Badge variant="info" label="Live" />
            </HStack>
          </VStack>
        </Card>

        <Text type="supporting">
          Astryx 0.7.11 · React 19.3.1 · Soko theme (dark #07070D, violet
          #5B3BFF, YES #3BE3A8, NO #FF7461) · Demo data only.
        </Text>
      </VStack>

      <Dialog
        isOpen={dialogOpen}
        onOpenChange={setDialogOpen}
        purpose="info"
        width={440}
      >
        <VStack gap={3} padding={4}>
          <Heading level={2}>How markets resolve</Heading>
          <Text>
            A market resolves YES or NO against a named source — IEBC for
            elections, KNBS for statistics, CBK for rates. The resolver cites
            the source and the market settles on that reading, never on a
            feeling.
          </Text>
          <HStack justify="end">
            <Button
              label="Got it"
              variant="primary"
              onClick={() => setDialogOpen(false)}
            />
          </HStack>
        </VStack>
      </Dialog>
    </VStack>
  );
}
