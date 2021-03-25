import { Engine, EngineOptions, EngineResult, RuleProperties } from "json-rules-engine"
import { GraphQLError } from 'graphql';


export const businessRulesEvaluate = async (rules: RuleProperties[], facts, options: EngineOptions = { allowUndefinedFacts: true }) => {

    const engine = new Engine(rules, options);
    const { events, failureEvents }: EngineResult = await engine.run(facts).catch((r) => r)

    if (events?.length > 0) {
        const message = events[0]?.params?.message ?? 'Operation not permited error'
        throw new GraphQLError(message)

    }
}