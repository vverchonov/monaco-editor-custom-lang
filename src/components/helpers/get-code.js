export function getCode() {
    return (
        '// Single line\n' +
        '/* Single line different style  */\n' +
        '/* Multi \n' +
        '   L\n' +
        '   I\n' +
        '   N\n' +
        '   E comment\n' +
        '*/\n\n' +
        'FOR AREA(\n\n' +
        '\t[Accounts].[Accounts].[Income Statement].leaves, // This returns a set\n' +
        '\t{[Scenario].[Scenario].[Actual], [Scenario].[Scenario].[Forecast].children}, // braces {} denotes a set\n' +
        '\t{{[Period].[Calendar].[P01], [Period].[Calendar].[P02]}, {}, {{[Period].[Calendar].[Half 1].descendants}}}) // Sets are flattened\n' +
        '\t[Year].[Year].[2014] = 2014.0/[Year].[Year].[2013];\n' +
        '\t// Target clauses can be nested\n' +
        '\tFOR AREA([Period].[Calendar].[Half 1].leaves)\n\n' +
        '\t\t[Year].[Year].[2015] = 2015;\n\n' +
        '\tENDFOR;\n\n' +
        '\t//Operators\n'+
        '\t+ - * / : < <= <> != = >\n\n' +
        '\t//Keywords\n'+
        '\tFOR AREA ENDFOR \n\n'+
        '\t//Word operators\n'+
        '\tAND IS NOT OR XOR\n\n'+
'ENDFOR;'

    );
}

export function getCodeDiff() {
    return (
        '// Single line\n' +
        '/* Sinqweqwegle line different style  */\n' +
        '/* Multi \n' +
        '   L\n' +
        '   I\n' +
        '   N\n' +
        '   E comment\n' +
        '*/\n\n' +
        'FOR AREA(\n\n' +
        '\t[Accoqwewqeunts].[Accounts].[Income Statement].leaves, // This returns a set\n' +
        '\t{[Scenwqewqeario].[Scenario].[Actual], [Scenario].[Scenario].[Forecast].children}, // braces {} denoteqwewqes a set\n' +
        '\t{{[Peqwewqeriod].[Calendar].[P01], [Period].[Calendar].[P02]}, {}, {{[Period].[Calewqewqendar].[Half 1].descenqwewqedants}}}) // Sets are flattwqeqeened\n' +
        '\t[Year].[Yearqweqwewqe].[2014] = 2014.0/[Year].[Year].[2013];\n' +
        '\t// Target clauses can be nested\n' +
        '\tFOR AREA([Period]qwe.[Calendar].[Half 1].leaqwewqeves)\n\n' +
        '\t\t[Year].[Year].[2015] = 2015;\n\n' +
        '\tENDFOR;\n\n' +
        '\t//Opeqwerators\n'+
        '\t+ - * / : < <= <> != = >\n\n' +
        '\t//Keywords\n'+
        '\tFOR AREA ENDwqewqFOR \n\n'+
        '\t//Wqwewqord operators\n'+
        '\tAND IS NOT OR XOR\n\n'+
'ENDFOR;'

    );
}