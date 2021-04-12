import { Engine, EngineOptions, EngineResult, RuleProperties } from "json-rules-engine"
import { HttpException, HttpStatus } from "@nestjs/common";

export class EngineConfig {
    rules: RuleProperties[];
    facts: Record<string, any>;
    options?: EngineOptions = { allowUndefinedFacts: true }
}
export const businessRulesEvaluate = async ({ rules, facts, options }: EngineConfig) => {

    const engine = new Engine(rules, options ?? { allowUndefinedFacts: true });
    const { events, failureEvents, results, failureResults }: EngineResult = await engine.run(facts);//.catch((r) => r)
    engine.stop();
    if (events?.length > 0) {
        const message = events[0]?.params?.message ?? 'Operation not permited error'
        throw new HttpException({ status: false, message, data: null }, HttpStatus.FORBIDDEN)
    }

}